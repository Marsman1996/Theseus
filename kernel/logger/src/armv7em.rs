use log::{Record, Level, SetLoggerError, Metadata, Log};
use cortex_m_semihosting::hprintln;


/// The static logger instance, an empty struct that implements the `Log` trait.
static LOGGER: Logger = Logger { };

/// By default, Theseus will log 
const DEFAULT_LOG_LEVEL: Level = Level::Trace;

/// A dummy struct that exists so we can implement the Log trait's methods.
struct Logger { }

impl Log for Logger {
    fn enabled(&self, metadata: &Metadata) -> bool {
        metadata.level() <= log::max_level()
    }

    fn log(&self, record: &Record) {
        if !self.enabled(record.metadata()) {
            return;
        }

        let level_str = match record.level() {
            Level::Error => "[E] ", 
            Level::Warn =>  "[W] ",
            Level::Info =>  "[I] ",
            Level::Debug => "[D] ",
            Level::Trace => "[T] ",
        };

        let file_loc = record.file().unwrap_or("??");
        let line_loc = record.line().unwrap_or(0);
        let _result = hprintln!("{}{}:{}: {}",
            level_str,
            file_loc,
            line_loc,
            record.args(),
        );
    }

    fn flush(&self) {
        // flushing the log is a no-op, since there is no write buffering yet
    }
}


/// Initialize the Theseus system logger, which writes log messages through semihosting.
pub fn init() -> Result<(), SetLoggerError> {
    log::set_logger(&LOGGER)?;
    set_log_level(DEFAULT_LOG_LEVEL);
    Ok(())
}

/// Set the log level, which determines whether a given log message is actually logged. 
/// 
/// For example, if `Level::Trace` is set, all log levels will be logged.
/// 
/// If `Level::Info` is set, `debug!()` and `trace!()` will not be logged, 
/// but `info!()`, `warn!()`, and `error!()` will be. 
pub fn set_log_level(level: Level) {
    log::set_max_level(level.to_level_filter())
}