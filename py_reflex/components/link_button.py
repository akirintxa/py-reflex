import reflex as rx
import py_reflex.styles.styles as styles
from py_reflex.styles.styles import Size as Size
from py_reflex.styles.colors import Color as Color


def link_button(title: str, body: str, image: str, url: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.image(
                    src=image,
                    width=Size.LARGE.value,
                    height=Size.LARGE.value,
                    margin=Size.MEDIUM.value
                ),
                rx.vstack(
                    rx.text(title, style=styles.button_title_style),
                    rx.text(body, style=styles.button_body_style),
                    align_items="start",
                    spacing=Size.SMALL.value,
                    padding_y=Size.SMALL.value
                )
            )
        ),
        href=url,
        is_external=True,
        width="100%"
    )