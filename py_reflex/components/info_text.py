import reflex as rx
from py_reflex.styles.colors import TextColor as TextColor
from py_reflex.styles.colors import Color as Color
from py_reflex.styles.styles import Size as Size


def info_text(title: str, body: str) -> rx.Component:
    return rx.box(
        rx.span(
            title,
            font_weight="bold",
            color=Color.PRIMARY.value
        ),
        f" {body}",
        font_size=Size.MEDIUM.value,
        color=TextColor.BODY.value
    )
