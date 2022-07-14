from django.db import models
import datetime
from django.utils import timezone

class Question(models.Model):
    question_text = models.CharField('question text', max_length=200)
    pub_date = models.DateTimeField('date published')
    
    def __str__(self):
        display_info = {
            'id': self.id,
            'text': self.question_text,
            'pub date': self.pub_date
        }
        return str(display_info)
    
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
    
class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    def __str__(self):
        display_info = {
            'id': self.id,
            'question': Question.objects.filter(id=self.question.id)[0].question_text,
            'text': self.choice_text,
            'votes': self.votes
        }
        return str(display_info)