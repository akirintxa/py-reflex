from rxconfig import config

import reflex as rx
from py_reflex.components.navbar import navbar
from py_reflex.views.header.header import header
from py_reflex.views.links.links import links
from py_reflex.components.footer import footer


class State(rx.State):
    """The app state."""

    pass


def index() -> rx.Component:
    return rx.vstack(
        navbar(),
        header(),
        links(),
        footer()

    )


# Add state and page to the app.
app = rx.App()
app.add_page(index)
app.compile()
