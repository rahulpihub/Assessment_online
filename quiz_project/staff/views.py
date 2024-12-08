from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class StaffHomeView(APIView):
    """
    A view to handle GET requests for staff home.
    Returns a JSON response with a message and status.
    """

    def get(self, request, *args, **kwargs):
        # Define the data you want to send to the React frontend
        data = {
            "message": "Running!",  # Message for the frontend
            "status": "mass"  # Status indicator
        }
        # Log the request for debugging purposes
        print("GET request received at StaffHomeView")
        # Return the response with a 200 OK status
        return Response(data, status=status.HTTP_200_OK)
