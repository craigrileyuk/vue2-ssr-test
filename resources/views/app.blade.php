@php
try {
    $ssr = Http::post('http://localhost:8080/render', $page)
        ->throw()
        ->json();
} catch (Exception $e) {
    $ssr = null;
}
@endphp
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="{{ mix('/js/app.js') }}" defer></script>
    @foreach ($ssr['head'] ?? [] as $element)
        {!! $element !!}
    @endforeach
</head>


<body>
    @if ($ssr)
        @php
            $dom = new DOMDocument();
            $dom->preserveWhiteSpace = false;
            $dom->loadHTML($ssr['body'], LIBXML_HTML_NOIMPLIED);
            $dom->formatOutput = true;
            print $dom->saveXML($dom->documentElement);
        @endphp
    @else
        @inertia
    @endif
</body>

</html>
