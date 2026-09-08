<?php
?>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
    <?= htmlspecialchars($pageTitle ?? 'JANNA Hub') ?>
</title>

<meta
    name="description"
    content="<?= htmlspecialchars($site['description'] ?? '') ?>"
>

<meta
    name="author"
    content="<?= htmlspecialchars($site['author'] ?? '') ?>"
>

<link
    rel="canonical"
    href="<?= htmlspecialchars($site['canonical'] ?? 'https://hub.janna.pl/') ?>"
>

<link
    rel="preconnect"
    href="https://fonts.googleapis.com"
>

<link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin
>

<link
    href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap"
    rel="stylesheet"
>

<link
    rel="stylesheet"
    href="/assets/css/style.css"
>