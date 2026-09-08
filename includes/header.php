<header class="header">

    <div class="brand-group">

        <a
            href="<?= htmlspecialchars($site['brand_url']) ?>"
            class="brand"
            aria-label="J·ANNA — strona główna"
        >
            J<span class="brand-dot">·</span>AN<span class="brand-n">N</span>A
        </a>

        <div class="identity">

            <div class="identity-name">
                <?= htmlspecialchars($site['name']) ?>
            </div>

            <div class="identity-alias">
                <?= htmlspecialchars($site['alias']) ?>
            </div>

        </div>

    </div>


    <!-- SITE NAVIGATION -->

    <nav
        class="main-nav"
        aria-label="Nawigacja serwisów"
    >

        <?php foreach ($siteNav as $item): ?>

            <?php if ($item['status'] === 'published'): ?>

                <a
                    href="<?= htmlspecialchars($item['url']) ?>"
                    <?php if (!empty($item['target'])): ?>
                        target="<?= htmlspecialchars($item['target']) ?>"
                        rel="noopener noreferrer"
                    <?php endif; ?>
                >
                    <?= htmlspecialchars($item['label']) ?>
                </a>

            <?php elseif ($item['status'] === 'active'): ?>

                <span class="active">
                    <?= htmlspecialchars($item['label']) ?>
                </span>

            <?php elseif ($item['status'] === 'unpublished'): ?>

                <span class="unpublished">
                    <?= htmlspecialchars($item['label']) ?>
                </span>

            <?php endif; ?>

        <?php endforeach; ?>

    </nav>

</header>