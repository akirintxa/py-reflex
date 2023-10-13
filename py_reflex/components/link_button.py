import reflex as rx


def link_button(text: str, url: str) -> rx.Component:
    return rx.link(
        rx.button(text),
        href=url,
        color="rgb(107,99,246)",
        button=True,
        is_external=True
    )
