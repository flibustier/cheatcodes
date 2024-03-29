## Cheatcodes
The commands you're always looking for, in one place 📝

### Command line

`env` to list all environment variables

`sed -i '' '/pattern-to-remove/d' src/**/package.json` to remove all lines with pattern in multiple files

#### 📦 Untar 

`tar xvzf file.tar.gz` for `.tgz` or `.tar.gz`

`tar xvjf file.tar.bz2` for `.tbz` or `.tar.bz2`

`tar xvf file.tar`

`tar xvC /var/tmp -f file.tar` for a specific directory

#### 🔎 Disk usage 

`df -h` for the percentage used of all volumes

`du -h --max-depth=1` for the size of the current directory

#### 📺 Screen 

`screen -S new_session_name` to create a new session

`screen -ls` to list all sessions

`screen -r new_session_name` to restore a previous session

> Ctrl + a (release) and then d to detach the process/screen (so it'll continue to run).

#### 📡 SSH 

`scp ./here.txt user@remote.host:~/file.txt` to copy `here.txt` (in current folder) to `~/file.txt` on the remote host

#### ⛵ Navigate

`pushd /directory` to put the current directory in a directory stack

`dirs` to list the directory stack

`popd` to go back to the previous directory

`dirs -c` to clear the directory stack

### 💉 SQL 

Create database and a new user with all rights on it

```sql
create database if not exists DATABASE_NAME character set utf8 collate utf8_unicode_ci;

grant all privileges on DATABASE_NAME.* to 'USER_NAME'@'localhost' identified by 'SECRET_PASSWORD';
```

### 🍇 GIT

Changing branch base :

```
(commit 1) - master
                \-- (commit 2) - (commit 3) - oldBranch
                                                \-- (commit 4) - (commit 5) - newBranch
```

To:
```
(commit 1) - master
                |-- (commit 2) - (commit 3) - oldBranch
                \-- (commit 4) - (commit 5) - newBranch
```

```
git checkout newBranch # Just to be clear which branch to be on.
git rebase --onto master oldBranch newBranch
```
