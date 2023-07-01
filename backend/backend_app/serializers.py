from rest_framework.serializers import ModelSerializer
from backend_app.models import UserDetail

class UserDetailSerializer(ModelSerializer):
    class Meta:
        model = UserDetail
        fields = '__all__'