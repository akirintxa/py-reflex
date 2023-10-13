import reflex as rx
import datetime


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="Monsters-red-04.png",
            width="100px",
            height="auto"
        ),
        rx.text(f"@{datetime.date.today().year} Desarrollado por Akirintxa")
    )
