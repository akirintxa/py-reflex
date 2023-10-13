import reflex as rx
from py_reflex.components.link_button import link_button


def links() -> rx.Component:
    return rx.vstack(
        link_button("Github", "https://github.com/akirintxa"),
        link_button("Youtube", "https://youtube.com"),
        link_button("Twitter", "https://x.com/lapoiax")

    )
