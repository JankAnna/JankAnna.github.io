<?php

usort($links, function ($a, $b) {
    return (int) $a['order'] <=> (int) $b['order'];
});

?>

<footer class="footer">

    <div class="footer-links">

        <?php foreach ($links as $link): ?>

            <a
                href="<?= htmlspecialchars($link['url']) ?>"
                <?php if (!empty($link['target'])): ?>
                    target="<?= htmlspecialchars($link['target']) ?>"
                    rel="noopener noreferrer"
                <?php endif; ?>
            >
                <?= htmlspecialchars($link['label']) ?>
            </a>

        <?php endforeach; ?>

    </div>


    <div class="footer-identity">

        <div class="footer-name">

            <div class="footer-name-main">
                <?= htmlspecialchars($site['name']) ?>
            </div>

            <div class="footer-name-alias">
                <?= htmlspecialchars($site['alias']) ?>
            </div>

        </div>


        <div class="footer-brand">

            <a
                href="<?= htmlspecialchars($site['canonical']) ?>"
                class="footer-brand-link"
                aria-label="J·ANNA — strona główna"
            >

                <span class="footer-brand-year">
                    © <?= htmlspecialchars($site['copyright']) ?>
                </span>

                <span class="footer-brand-main">
                    J<span>·</span>AN<span class="brand-n">N</span>A
                </span>

            </a>

        </div>

    </div>

</footer>