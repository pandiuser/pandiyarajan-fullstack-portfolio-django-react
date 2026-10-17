from django.apps import AppConfig

class PortfolioConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "portfolio"

    def ready(self):
        from django.db import OperationalError, ProgrammingError
        from django.contrib.auth import get_user_model
        User = get_user_model()

        try:
            user, created = User.objects.get_or_create(
                username='admin',
                defaults={'email': 'admin@gmail.com'}
            )

            user.set_password('admin123')
            user.is_staff = True
            user.is_superuser = True
            user.save()
        except (OperationalError, ProgrammingError):
            # Tables don't exist yet (initial migrate) — skip
            pass