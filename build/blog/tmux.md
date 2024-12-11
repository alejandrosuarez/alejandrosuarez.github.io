## What is Tmux?

`tmux` (Terminal Multiplexer) is a tool that allows you to run multiple terminal sessions (each within its own process) in a single window. This is especially useful for managing long-running tasks, keeping work organized, and improving productivity by allowing you to create and switch between multiple terminal panes easily.

---

## **Creating a New tmux Session**

- To **create a new tmux session**, use:
    
    ```text
    tmux new -s <session-name>
    ```
    
    Replace `<session-name>` with a name for your session (e.g., `my_session`).
    
- To create a new session without specifying a name:
    
    ```text
    tmux new
    ```
    

## **Attaching to an Existing Session**

- To **list all current tmux sessions**:
    
    ```text
    tmux ls
    ```
    
- To **attach to an existing session**:
    
    ```text
    tmux attach -t <session-name>
    ```
    
    Replace `<session-name>` with the session you want to attach to.
    

## Killing an Existing Session

- Replace `<session-name>` with the session you want to attach to.
    - If you do not want to kill a specific window, just the session name is sufficient.

```bash
tmux kill-window -t <session-name>:<window-number>
```

## **Detaching from a Session**

- **Detach** from a session (leave it running in the background):
    - Press `Ctrl` + `b`, then `d`.

## **Keybinds for Common Actions**

- **Detach from Session**: `Ctrl` + `b`, then `d`
- **Split Pane Horizontally**: `Ctrl` + `b`, then `"`
- **Split Pane Vertically**: `Ctrl` + `b`, then `%`
- **Switch Between Panes**: `Ctrl` + `b`, then use the arrow keys
- **Close a Pane**: `Ctrl` + `b`, then `x` (confirm with `y` to close)
- **Create a New Window**: `Ctrl` + `b`, then `c`
- **Switch Between Windows**: `Ctrl` + `b`, then the window number (e.g., `0`, `1`, etc.)
- **List All Windows**: `Ctrl` + `b`, then `w`

google.com

https://google.com