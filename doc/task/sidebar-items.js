window.SIDEBAR_ITEMS = {"enum":[["ExitValue","The two ways a `Task` can exit, including possible return values and conditions."],["InheritedStates","The states used to initialize a new `Task` when creating it; see [`Task::new()`]."],["InitCurrentTaskError","An error type indicating that the current task was already initialized."],["KillReason","The list of possible reasons that a given `Task` was killed prematurely."],["RunState","The set of possible runstates that a `Task` can have."]],"fn":[["all_tasks","Returns a list containing a snapshot of all tasks that currently exist."],["bootstrap_task","Bootstraps a new task from the current thread of execution."],["get_my_current_task","Returns a cloned reference to the current task."],["get_my_current_task_id","Returns the unique ID of the current task."],["get_task","Returns a `WeakTaskRef` (shared reference) to the `Task` specified by the given `task_id`."],["schedule","Yields the current CPU by selecting a new `Task` to run next, and then switches to that new `Task`."],["set_kill_handler","Registers a kill handler function for the current `Task`."],["set_scheduler_policy","Sets the active scheduler policy used by [`schedule()`] to select the next task."],["take_kill_handler","Takes ownership of the current `Task`’s [`KillHandler`] function."],["task_switch","Switches from the current task to the given `next` task."],["with_current_task","Invokes the given `function` with a reference to the current task."],["with_current_task_and_value","Similar to [`with_current_task()`], but also accepts a value that is passed to the given `function` or returned in the case of an error."]],"struct":[["CurrentTaskNotFound","An error type indicating that the current task has not yet been initialized."],["ExitableTaskRef","A wrapper around `TaskRef` that allows this task to mark itself as exited."],["JoinableTaskRef","A reference to a `Task` that can be `join`ed; auto-derefs into [`TaskRef`]."],["PanicInfoOwned","Just like `core::panic::PanicInfo`, but with owned String types instead of &str references."],["RestartInfo","A struct holding data items needed to restart a `Task`."],["Task","A structure that contains contextual information for a thread of execution. "],["TaskRef","A shareable, cloneable reference to a `Task` that exposes more methods for task management and auto-derefs into an immutable `&Task` reference."],["WeakTaskRef","A weak reference to a shared Task reference (`TaskRef`)."]],"type":[["FailureCleanupFunction","The signature of a Task’s failure cleanup function."],["KillHandler","The function signature of the callback that will be invoked when a `Task` panics or otherwise fails, e.g., a machine exception occurs."],["SchedulerFunc","The signature for the function that selects the next task for the given CPU."]]};