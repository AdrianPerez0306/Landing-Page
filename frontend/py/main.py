from pyscript import document , when

@when("click", "switch")
def switch_mode(event):
    #Comentario
    document.querySelector('body').classList.toggle('dark')

@when("click", "toggle")
def switch_toggle(event):
    #Comentario
    document.querySelector('aside').classList.toggle('close')

