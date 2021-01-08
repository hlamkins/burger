
$(function () {
    $(".create-form").on("submit", function (event) {
      
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
      };
  
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("created new burger");
        
        location.reload();
      });
    });
  
    $(".change-devoured").on("click", function (event) {
      let id = $(this).data("id");
      let newBurger = $(this).data("devoured");
  
      let newBurgerState = {
        devoured: !newBurger,
      };
  
     
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState,
      }).then(function () {
        console.log("changed devoured to", newBurgerState);
        
        location.reload();
      });
    });
  
    $(".delete-burger").on("click", function (event) {
      let id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(function () {
        console.log("Deleted burger", id);
        
        location.reload();
      });
    });
  });