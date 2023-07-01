from django.db import models

# Create your models here.

class UserDetail(models.Model):
    pk_user = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=255)
    father_name = models.CharField(max_length=255)
    mother_name = models.CharField(max_length=255)
    age = models.CharField(max_length=255)
    mobile = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    

    def __str__(self) -> str:
        first_name = self.full_name.split(' ')[0]        
        return f"{first_name} {self.father_name}"
    
    class Meta:
        managed = True
        db_table = 'user_detail'