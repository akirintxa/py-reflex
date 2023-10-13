import reflex as rx


def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(name="Akirintxa", size="xl"),
        rx.text("@akirintxa"),
        rx.text("Consolidated Project Manager - Dev in progress")
    )
