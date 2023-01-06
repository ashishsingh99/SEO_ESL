from django.urls import path
from . import views
from account.views import SendPasswordResetEmailView,KeywordIdView,KeywordGetIdView, UserChangePasswordView, UserLoginView, UserProfileView, UserRegistrationView, UserPasswordResetView
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    path('KeywordId/', KeywordIdView.as_view(), name='Keyword-Id'),
    path('KeywordGetId/', KeywordGetIdView.as_view(), name='Keyword-Id'),

]