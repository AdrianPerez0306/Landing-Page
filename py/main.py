from pyscript import document , when, display

@when("click", "switch")
def switch_mode(event):
    #Comentario
    display(["Prueba"], target="display")
