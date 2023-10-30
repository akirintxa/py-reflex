import reflex as rx
import py_reflex.styles.styles as styles
from py_reflex.styles.styles import Size as Size
from py_reflex.styles.colors import Color as Color


def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.span("akirin", color=Color.PRIMARY.value),
            rx.span("txa", color=Color.SECONDARY.value),
            style=styles.navbar_title_style
        ),
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0"
    )
