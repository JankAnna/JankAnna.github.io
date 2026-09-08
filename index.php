<?php

declare(strict_types=1);

$basePath = __DIR__;

$dataPath     = $basePath . '/data';
$includesPath = $basePath . '/includes';

require_once $includesPath . '/csv.php';

$site = csv_assoc($dataPath . '/site.csv');

$nav = csv_rows($dataPath . '/navigation.csv');

usort(
    $nav,
    fn(array $a, array $b): int =>
        (int) $a['order'] <=> (int) $b['order']
);

$siteNav = csv_rows($dataPath . '/site-navigation.csv');

usort(
    $siteNav,
    fn(array $a, array $b): int =>
        (int) $a['order'] <=> (int) $b['order']
);

$links = csv_rows($dataPath . '/links.csv');

usort(
    $links,
    fn(array $a, array $b): int =>
        (int) $a['order'] <=> (int) $b['order']
);

$heroRows = csv_rows($dataPath . '/hero.csv');

$hero = [];

foreach ($heroRows as $row) {
    $hero[$row['type']] = $row['value'];
}

$domains = csv_rows($dataPath . '/domains.csv');

usort(
    $domains,
    fn(array $a, array $b): int =>
        (int) $a['order'] <=> (int) $b['order']
);

$scope = csv_rows($dataPath . '/scope.csv');

usort(
    $scope,
    fn(array $a, array $b): int =>
        (int) $a['order'] <=> (int) $b['order']
);

$pageTitle = 'JANNA Hub — ' . ($site['name'] ?? 'JANNA');

?>
<!DOCTYPE html>
<html lang="pl">

<head>

    <?php require $includesPath . '/head.php'; ?>

</head>

<body>

    <div class="container">

        <?php require $includesPath . '/header.php'; ?>

        <main>
        <?php require $includesPath . '/main.php'; ?>
        </main>

        <?php require $includesPath . '/footer.php'; ?>

    </div>

</body>

</html>