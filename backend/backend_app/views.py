from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from django.http.response import JsonResponse 
from backend_app.models import *
from backend_app.serializers import *

class UserView(APIView):
    def get(self,request):
        """
        This will return all users
        """
        response = None
        try:
            response = UserDetail.objects.all().values()
        except Exception as error:
            response = f'{error}'
        finally:
            return Response({'users':response})
            

    def post(self,request):
        """
        This will add a new instance to the model
        """
        response = None
        try:
            user = UserDetailSerializer(data=request.data)
            if user.is_valid():
                user.save()
            response = user.instance
        except Exception as error:
            response = f'{error}'
        finally:
            return JsonResponse({'user':user,'message':f'{response} created'})

class UserDetailView(APIView):
    def get(self,request,pk):
        """
        This will return a particular instance 
        """
        response = None
        try:
            response = UserDetail.objects.get(pk_user = pk)
            user = UserDetailSerializer(instance=response)
        except Exception as error:
            response = f'{error}'
        finally:
            return Response({'user':user.data,'message':f'{response} returned'})
            

    def put(self,request,pk):
        """
        This will update the instance
        """
        response = None
        try:
            user_detail = UserDetail.objects.get(pk_user = pk)
            user = UserDetailSerializer(instance = user_detail,data=request.data)
            if user.is_valid():
                user.save()
            response = f'{user.instance}'
        except Exception as error:
            response = f'{error}'
        finally:
            return JsonResponse({'user':f'{response} updated'})
    
    def delete(self,request,pk):
        """
        This will delete the instance.
        """
        response = None
        try:
            response = UserDetail.objects.get(pk_user = pk)
            response.delete()
        except Exception as error:
            response = f'{error}'
        finally:
            return Response({'users':f'{response} deleted'})