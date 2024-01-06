from pyscript import document , when

@when("click", "switch")
def switch_mode(event):
    #Comentario
    document.querySelector('body').classList.toggle('dark')
