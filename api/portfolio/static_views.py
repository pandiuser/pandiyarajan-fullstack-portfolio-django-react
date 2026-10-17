import json
from pathlib import Path
from rest_framework.views import APIView
from rest_framework.response import Response

STATIC_DATA_DIR = Path(__file__).resolve().parent / 'static_data'


def _load_json(filename):
    """Load and return data from a static JSON file."""
    filepath = STATIC_DATA_DIR / filename
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)


class ExperienceStaticView(APIView):
    """Return static experience data from JSON file."""
    def get(self, request):
        data = _load_json('experience.json')
        return Response(data)


class EducationStaticView(APIView):
    """Return static education data from JSON file."""
    def get(self, request):
        data = _load_json('education.json')
        return Response(data)


class AwardsStaticView(APIView):
    """Return static awards data from JSON file."""
    def get(self, request):
        data = _load_json('awards.json')
        return Response(data)


class ProjectsStaticView(APIView):
    """Return static projects data from JSON file."""
    def get(self, request):
        data = _load_json('projects.json')
        return Response(data)


class AboutmeStaticView(APIView):
    """Return static about-me data from JSON file."""
    def get(self, request):
        data = _load_json('aboutme.json')
        return Response(data)
