release: python project/manage.py migrate
web: gunicorn --chdir /project project.wsgi --log-file -