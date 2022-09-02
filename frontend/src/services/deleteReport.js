//Function to delete report
const deleteReport = async (id) => {
    window.location.reload(false);
  
    return fetch(`http://localhost:4000/pet_report/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
      }
  })
      .then(response => {
        return response.json();
      })
      .then((data) => {
          console.log(data);
      })
      .catch((error) => {
          console.log(error)
      });
  };

  export default deleteReport;