import reflex as rx
from py_reflex.components.link_icon import link_icon
from py_reflex.components.info_text import info_text
from py_reflex.styles.styles import Size as Size
from py_reflex.styles.colors import Color as Color
from py_reflex.styles.colors import TextColor as TextColor
import py_reflex.constants as const
import datetime


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                name="Akirintxa",
                size="xl",
                src="avatar.png",
                color=TextColor.BODY.value,
                bg=Color.CONTENT.value,
                padding="2px",
                border="4px",
                border_color=Color.PRIMARY.value
            ),
            rx.vstack(
                rx.heading(
                    "Akirintxa",
                    size="lg"
                ),
                rx.text(
                    "@akirintxa",
                    margin_top=Size.ZERO.value,
                    color=Color.PRIMARY.value
                ),
                rx.hstack(
                    link_icon(
                        "icons/github.svg",
                        const.GITHUB_URL
                    ),
                    link_icon(
                        "icons/linkedin.svg",
                        const.LINKEDIN_URL
                    ),
                    link_icon(
                        "icons/spotify.svg",
                        const.SPOTIFY_URL
                    ),
                    spacing=Size.LARGE.value
                ),
                align_items="start"
            ),
            spacing=Size.DEFAULT.value
        ),
        rx.flex(
            info_text(
                f"{experience()}+",
                "años de experiencia"
            ),
            rx.spacer(),
            info_text(
                "0+", "aplicaciones creadas"
            ),
            rx.spacer(),
            info_text(
                "0+", "seguidores"
            ),
            width="100%"
        ),
        rx.text(
            f"""
            Ingeniero electrónico - Project Manager - Dev in Progress
            """,
            font_size=Size.DEFAULT.value,
            color=TextColor.BODY.value
        ),
        spacing=Size.BIG.value,
        align_items="start"
    )


def experience() -> int:
    return datetime.date.today().year - 2005
