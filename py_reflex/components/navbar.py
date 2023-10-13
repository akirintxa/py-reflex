import reflex as rx


def navbar() -> rx.Component:
    return rx.hstack(
        rx.text(
            "akirintxa",
            height="40px"
        ),
        position="sticky",
        bg="yellow",
        padding="16px",
        z_index="999"
    )
