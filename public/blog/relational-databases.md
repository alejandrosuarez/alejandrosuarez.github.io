# How to run an Inquiry in Demo

###\ *11/25/2024*

---

## Virtual Machine Aliases

```bash
alias stag="gcloud config set project somnia-staging && gcloud compute ssh alan@instance-staging"
alias prod="gcloud config set project somnia-370502 && gcloud compute ssh instance-1 --project=somnia-370502 --zone=us-central1-a --tunnel-through-iap"
alias demo="gcloud config set project somnia-370502 && gcloud compute ssh instance-2 --project=somnia-370502 --zone=us-central1-a --tunnel-through-iap"
```

## Authentication

```bash
# Used to authenticate with the project [to pull from the datastore]
gcloud auth application-default login

# Used to authenticate to the VM
gcloud auth login
```

Check out [OpenAI](https://www.openai.com) for more information.

---

## Instructions


1. Log into the demo virtual machine on GCP
    1. *use the alias demo command above*
    2. *Make sure to authenticate with* `gcloud auth login`
2. Make sure to kill anything running associated with the demo server:
    
    ```bash
    sudo pkill uvicorn
    sudo pkill celery
    ```
    
3. Run `uvicorn`, `beat`, `worker` in different `tmux` sessions:
    1. *I usually like to have uvicorn in one, and celery beat & worker in another*
    
    ```bash
    [UVICORN COMMAND HERE]
    celery -A tasks worker
    celery -A tasks beat
    ```
    
4. Find the desired `inquiry_id` in the `default` datastore that you want to copy over to `demo`
5. Copy over the inquiry in demo:
    1. Use the script: `scripts/create_inquiry_in_demo.py`
    2. Just replace the inquiry id you want to copy at the top `SINGLE_INQUIRY_ID`
    3. Make sure all the create in datastore calls are uncommented throughout the file
        1. This copies over the patient, practice, and provider are also copied over
6. Go to inquiry in demo datastore:
    1. Set status from `SUCCESS` to `PENDING`
    2. Make sure `max_num_retries` > `num_retries_attempted` 
7. Finally, go to the demo endpoint, and replace inquiry_id with the inquiry from demo:
    1. [`https://demo.healthharbor.co/debug/start/inquiry_id`](https://demo.healthharbor.co/debug/start/inquiry_id)

## Seen Issues

- OpenAI SSL Cert issue
    - Make sure to include the [ADD HERE]
- Celery beat fail to start
    - Corrupted `celerybeat-schedule`
    - The schedule gets added to the root directory of the Health Harbor database, so run the following command in the root dir
        - `rm celerybeat-schedule`
        - restart celery beat

---

| **Name**       | **Age** | **Occupation**   |
|----------------|---------|-------------------|
| Alice Johnson  | 28      | Software Engineer |
| Bob Smith      | 34      | Graphic Designer  |
| Charlie Davis  | 25      | Data Analyst      |
| Diana Prince   | 30      | Product Manager   |

---

```text
Configuration ->                                                                                                                                                                           
    . broker -> redis://localhost:6379/1                                                                                                                                                   
    . loader -> celery.loaders.app.AppLoader                                                                                                                                               
    . scheduler -> celery.beat.PersistentScheduler                                                                                                                                         
    . db -> celerybeat-schedule                                                                                                                                                            
    . logfile -> [stderr]@%WARNING                                                                                                                                                         
    . maxinterval -> 5.00 minutes (300s)                                                                                                                                                   
[2024-11-26 16:05:58,865: CRITICAL/MainProcess] beat raised exception <class '_dbm.error'>: error('cannot add item to database')                                                           
Traceback (most recent call last):                                                                                                                                                         
  File "/usr/lib/python3.11/shelve.py", line 111, in __getitem__                                                                                                                           
    value = self.cache[key]                                                                                                                                                                
            ~~~~~~~~~~^^^^^                                                                                                                                                                
KeyError: 'entries'                                                                                                                                                                        
                                                                                              
During handling of the above exception, another exception occurred:                                                                                                                                                   
                                                                                              
Traceback (most recent call last):
  File "/home/victorgoncalves/Code/health-harbor/.venv/lib/python3.11/site-packages/celery/beat.py", line 567, in _create_schedule                                                                                    
    self._store['entries']                                                                   
    ~~~~~~~~~~~^^^^^^^^^^^                                                                                 
  File "/usr/lib/python3.11/shelve.py", line 113, in __getitem__                                           
    f = BytesIO(self.dict[key.encode(self.keyencoding)])                                                   
                ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                    
KeyError: b'entries'                                 

During handling of the above exception, another exception occurred:                                        

Traceback (most recent call last):                   
  File "/home/victorgoncalves/Code/health-harbor/.venv/lib/python3.11/site-packages/celery/apps/beat.py", line 113, in start_scheduler                                                                                
    service.start()                                  
  File "/home/victorgoncalves/Code/health-harbor/.venv/lib/python3.11/site-packages/celery/beat.py", line 631, in start                                                                                               
    humanize_seconds(self.scheduler.max_interval))                           
```