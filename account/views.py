from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import SendPasswordResetEmailSerializer,KeywordGetIdSerializer, UserChangePasswordSerializer,KeywordIdSerializer, UserLoginSerializer, UserPasswordResetSerializer, UserProfileSerializer, UserRegistrationSerializer
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from django.middleware.csrf import get_token
from django.http import JsonResponse
from .models import KeywordId

# Generate Token Manually
def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }

def get_tokens_for_Id(Id):
  refresh = RefreshToken.for_user(Id)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }

def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})

class UserRegistrationView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserRegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token = get_tokens_for_user(user)
    return Response({'token':token, 'msg':'Registration Successful'}, status=status.HTTP_201_CREATED)

class UserLoginView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.data.get('email')
    password = serializer.data.get('password')
    user = authenticate(email=email, password=password)
    if user is not None:
      token = get_tokens_for_user(user)
      return Response({'token':token, 'msg':'Login Success', 'status':'200'}, status=status.HTTP_200_OK)
    else:
      return Response({'status':'200', 'msg':'Invalid Credentials'}, status=status.HTTP_200_OK)
      # return Response({'msg':'Please check your Email'}, status=status.HTTP_404_NOT_FOUND)

class UserProfileView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self, request, format=None):
    serializer = UserProfileSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)

class KeywordIdView(APIView):
  
  def post(self, request):
    # is_many = isinstance(request.data, list)
    serializer = KeywordIdSerializer(data=request.data)
    if serializer.is_valid():
      # self.perform_create(serializer)
      serializer.save()
      return Response({'msg':'Id Successful', 'data':serializer.data}, status=status.HTTP_201_CREATED)
    else:
      return Response({'msg':'Invalid'}, status=status.HTTP_400_BAD_REQUEST)

class KeywordGetIdView(APIView):
  def get(self, request, id=None, format=None):
    if id:
      keyword = KeywordId.objects.filter(id=id)
      serializer = KeywordGetIdSerializer(keyword)
      return Response(serializer.data, status=status.HTTP_200_OK)
    keyword = KeywordId.objects.all()
    serializer = KeywordGetIdSerializer(keyword, many=True)
    return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

# class KeywordGetIdView(APIView):
#   # renderer_classes = [UserRenderer]
#   # permission_classes = [IsAuthenticated]
#   def get(self, request, id=None, format=None):
#     if id:
#       keyword = KeywordId.objects.get(id=id)
#       serializer = KeywordGetIdSerializer(keyword)
#     # serializer = KeywordGetIdSerializer(request.user)
#     # serializer.is_valid(raise_exception=True)
#       return Response(serializer.data, status=status.HTTP_200_OK)
#     keyword = KeywordId.objects.all()
#     serializer = KeywordGetIdSerializer(keyword)
#     return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

class UserChangePasswordView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def post(self, request, format=None):
    serializer = UserChangePasswordSerializer(data=request.data, context={'user':request.user})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Changed Successfully'}, status=status.HTTP_200_OK)

class SendPasswordResetEmailView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = SendPasswordResetEmailSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Reset link send. Please check your Email'}, status=status.HTTP_200_OK)

class UserPasswordResetView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, uid, token, format=None):
    serializer = UserPasswordResetSerializer(data=request.data, context={'uid':uid, 'token':token})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Reset Successfully'}, status=status.HTTP_200_OK)


