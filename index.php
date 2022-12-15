<?php
include 'libs/link.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">

	<title>Fahad.me</title>
	<meta content="" name="description">
	<meta content="" name="keywords">

	<!-- Favicons -->
	<link href="assets/img/favicon.png" rel="icon">
	<link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

	<!-- Google Fonts -->
	<link
		href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
		rel="stylesheet">

	<!-- Vendor CSS Files -->
	<link href="assets/vendor/aos/aos.css" rel="stylesheet">
	<link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
	<link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
	<link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
	<link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

	<!-- Template Main CSS File -->
	<link href="assets/css/style.css" rel="stylesheet">
</head>

<body>

	<!-- ======= Mobile nav toggle button ======= -->
	<i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
	<!-- ======= Header ======= -->
	<header id="header" class="d-flex flex-column justify-content-center">

		<nav id="navbar" class="navbar nav-menu">
			<ul>
				<li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a>
				</li>
				<li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
				<li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a>
				</li>
				<li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i>
						<span>Portfolio</span></a></li>
				<li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a>
				</li>
				<li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a>
				</li>
			</ul>
		</nav><!-- .nav-menu -->

	</header><!-- End Header -->

	<?php
    link_temp('_header');
    ?>

	<main id="main">

		<?php
        link_temp('_about')
        	?>

		<?php
        link_temp('_facts');
        ?>

		<?php
        link_temp('_skills');
        ?>

		<?php
        link_temp('_resume');
        ?>

		<?php
        link_temp('_Project');
        ?>

		<?php
        // link_temp('_services');
        ?>

		<?php
        // link_temp('_testimonials');
        ?>

		<?php
        link_temp('_contacts');
        ?>

	</main>

	<?php
    link_temp('_footer');
    ?>

	<?php
    link_temp('_script');
    ?>

</body>

</html>