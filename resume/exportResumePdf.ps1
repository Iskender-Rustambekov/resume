$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$chrome = Join-Path $env:ProgramFiles "Google\Chrome\Application\chrome.exe"
$resumeDir = Join-Path $root "public\media\resume"

if (-not (Test-Path $chrome)) {
	throw "Chrome executable was not found at $chrome"
}

$items = @(
	@{
		Html = "iskender-rustambekov-resume-en.html"
		Pdf = "iskender-rustambekov-resume-en.pdf"
	},
	@{
		Html = "iskender-rustambekov-resume-ru.html"
		Pdf = "iskender-rustambekov-resume-ru.pdf"
	}
)

foreach ($item in $items) {
	$htmlPath = Join-Path $resumeDir $item.Html
	$pdfPath = Join-Path $resumeDir $item.Pdf

	if (-not (Test-Path $htmlPath)) {
		throw "HTML file was not found: $htmlPath"
	}

	& $chrome `
		--headless `
		--disable-gpu `
		--no-pdf-header-footer `
		--print-to-pdf="$pdfPath" `
		$htmlPath
}
