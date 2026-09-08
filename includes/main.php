<main>

    <section class="hero">

        <div class="eyebrow">
            <span>01</span>
            <?= htmlspecialchars($hero['eyebrow']) ?>
        </div>

        <div class="hero-content">

            <div class="title-area">

                <div class="title-wrap">

                    <h1>
                        <?= htmlspecialchars($hero['title_1']) ?><br>
                        <span><?= htmlspecialchars($hero['title_2']) ?></span>
                    </h1>

                    <div class="cursor"></div>

                </div>

            </div>

            <div class="description">

                <p>
                    <?= htmlspecialchars($hero['description']) ?>
                </p>

                <p class="muted">
                    <?= htmlspecialchars($hero['description_muted']) ?>
                </p>

            </div>

        </div>


        <div class="domains">

            <?php foreach ($domains as $domain): ?>

                <div class="domain">

                    <span class="number">
                        <?= htmlspecialchars($domain['number']) ?>
                    </span>

                    <span>
                        <?= htmlspecialchars($domain['label']) ?>
                    </span>

                </div>

            <?php endforeach; ?>

        </div>


        <section class="scope">

            <div class="scope-label">
                <span>02</span>
                SYSTEM
            </div>

            <div class="scope-content">

                <?php foreach ($scope as $item): ?>

                    <div class="scope-item">

                        <span>
                            <?= htmlspecialchars($item['number']) ?>
                        </span>

                        <strong>
                            <?= htmlspecialchars($item['title']) ?>
                        </strong>

                        <small>
                            <?= htmlspecialchars($item['description']) ?>
                        </small>

                    </div>

                <?php endforeach; ?>

            </div>

        </section>

    </section>

</main>