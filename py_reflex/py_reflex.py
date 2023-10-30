import reflex as rx
from py_reflex.components.navbar import navbar
from py_reflex.views.header.header import header
from py_reflex.views.links.links import links
from py_reflex.components.footer import footer
import py_reflex.styles.styles as styles
from py_reflex.styles.styles import Size as Size


class State(rx.State):
    """The app state."""
    pass


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                max_width = styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value
            )
        ),
        footer()
    )


# Add state and page to the app.
app = rx.App(style=styles.BASE_STYLE)
app.add_page(
    index,
    title="Akirintxa | Dev in progress",
    image="avatar.png"
    )
app.compile()

