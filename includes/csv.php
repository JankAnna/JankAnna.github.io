<?php

declare(strict_types=1);


function csv_rows(string $file): array
{
    if (!is_file($file)) {
        return [];
    }

    $handle = fopen($file, 'r');

    if ($handle === false) {
        return [];
    }

    $headers = fgetcsv($handle, 0, ';');

    if ($headers === false) {
        fclose($handle);
        return [];
    }

    // Remove UTF-8 BOM if present
    $headers[0] = preg_replace('/^\xEF\xBB\xBF/', '', $headers[0]);

    $rows = [];

    while (($data = fgetcsv($handle, 0, ';')) !== false) {

        if (count($data) !== count($headers)) {
            continue;
        }

        $row = array_combine($headers, $data);

        if ($row !== false) {
            $rows[] = $row;
        }
    }

    fclose($handle);

    return $rows;
}


function csv_assoc(string $file): array
{
    $rows = csv_rows($file);

    $result = [];

    foreach ($rows as $row) {

        if (isset($row['type'], $row['value'])) {
            $result[$row['type']] = $row['value'];
        }
    }

    return $result;
}