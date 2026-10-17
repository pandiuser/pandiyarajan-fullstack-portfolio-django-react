from django.urls import include, path
from rest_framework import routers

from . import views
from .static_views import (
    ExperienceStaticView,
    EducationStaticView,
    AwardsStaticView,
    ProjectsStaticView,
    AboutmeStaticView,
)

# Keep router for models that still need CRUD (CV, ProfileImage)
router = routers.DefaultRouter()
router.register(r'cv', views.CVViewSet)
router.register(r'profileimage', views.ProfileImageViewSet)

urlpatterns = [
    # Static content endpoints (read from JSON files)
    path('experience/', ExperienceStaticView.as_view(), name='experience-list'),
    path('education/', EducationStaticView.as_view(), name='education-list'),
    path('awards/', AwardsStaticView.as_view(), name='awards-list'),
    path('projects/', ProjectsStaticView.as_view(), name='projects-list'),
    path('aboutme/', AboutmeStaticView.as_view(), name='aboutme-list'),
    # Router-based endpoints (CV, ProfileImage still use DB)
    path('', include(router.urls)),
]
