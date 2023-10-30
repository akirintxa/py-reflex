import reflex as rx
import datetime
import py_reflex.constants as const
from py_reflex.styles.styles import Size as Size
from py_reflex.styles.colors import Color as Color
from py_reflex.styles.colors import TextColor as TextColor


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="logo.png",
            height=Size.VERY_BIG.value
        ),
        rx.link(
            rx.box(
                f"© {datetime.date.today().year} ",
                rx.span("Akirintxa", color=Color.PRIMARY.value),
                " v1."
            ),
            href=const.WEB_URL,
            is_external=True,
            font_size=Size.MEDIUM.value
        ),
        rx.text(
            "Project management and software development .",
            font_size=Size.MEDIUM.value,
            margin_top=Size.ZERO.value
        ),
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.BIG.value,
        spacing=Size.DEFAULT.value,
        color=TextColor.FOOTER.value
    )
