import reflex as rx
from py_reflex.components.link_button import link_button
from py_reflex.components.title import title
from py_reflex.styles.colors import TextColor as TextColor
from py_reflex.styles.styles import Size as Size
import py_reflex.constants as const

def links() -> rx.Component:
    return rx.vstack(
        title("Portafolio"),
        link_button(
            "Github",
            "Un poquito de mis experimentos de programación",
            "icons/twitch.svg",
            const.GITHUB_URL
        ),

        title("Recursos y más"),
        link_button(
            "Libros recomendados",
            "Mi listado de libros sobre programación, ciencia y tecnología",
            "icons/book.svg",
            const.BOOKS_URL
        ),
        link_button(
            "Mi setup",
            "Listado con todos los elementos que uso en mi trabjao",
            "icons/setup.svg",
            const.SETUP_URL
        ),
        link_button(
            "Mi web",
            "Ya estás en ella!",
            "icons/logo.png",
            const.WEB_URL
        ),

        title("Contacto"),
        link_button(
            "Email",
            const.EMAIL,
            "icons/email.svg",
            f"mailto:{const.EMAIL}"
        ),
        width="100%",
        spacing=Size.DEFAULT.value,
    )