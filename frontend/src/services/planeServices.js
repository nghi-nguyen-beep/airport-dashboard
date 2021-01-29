// Calls the create endpoint to add a new plane status
export async function addPlane(data) {
    const response = await fetch(`/api/planestatus/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({planeObject: data})
      })
    return await response.json();
}

// Calls the read endpoint to get the status of all planes
export async function getAllPlanes() {

    const response = await fetch('/api/planestatus/read');
    return await response.json();
}

// Calls the update endpoint to update a plane's status
export async function updatePlane() {
    // Implement update request here
    return false
}

// Calls the delete endpoint to delete a plane's status
export async function deletePlane() {
    // Implement delete request here
    return false
}