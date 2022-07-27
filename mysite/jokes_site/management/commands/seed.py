from ....number_jokes.gardenpath_polynomials import *
from django.core.management.base import BaseCommand
from mysite.jokes_site.models import *
from logging import Logger
import random
from faker import Faker

logger = Logger()
fake = Faker()

# python manage.py seed --mode=refresh

""" Clear all data and creates jokees """
MODE_REFRESH = 'refresh'

""" Clear all data and do not create any object """
MODE_CLEAR = 'clear'

class Command(BaseCommand):
    help = "seed database for testing and development."

    def add_arguments(self, parser):
        parser.add_argument('--mode', type=str, help="Mode")

    def handle(self, *args, **options):
        self.stdout.write('seeding data...')
        run_seed(self, options['mode'])
        self.stdout.write('done.')


def clear_data():
    """Deletes all the table data"""
    logger.info("Delete Joke instances")
    Joke.objects.all().delete()


def create_joke():
    """Creates an joke object"""
    logger.info("Creating joke")
    
    content_info = {}
    
    joke = Joke(
        content_info = content_info,
        title = fake.text(max_nb_chars = 20),
        user = None,
    )
    joke.save()
    logger.info("{} joke created.".format(joke))
    return joke

def run_seed(self, mode):
    """ Seed database based on mode

    :param mode: refresh / clear 
    :return:
    """
    # Clear data from tables
    clear_data()
    if mode == MODE_CLEAR:
        return

    # Creating 15 jokees
    for i in range(15):
        create_joke()