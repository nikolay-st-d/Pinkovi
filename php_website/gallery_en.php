<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/gallery.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/main.css">
    <script type="text/javascript" src="js/gallery.js" defer></script>
    <script type="text/javascript" src="js/navbar.js" defer></script>
    <link rel="icon" type="image/png" href="images/pinkoviicon.png">
    <title>Gallery | Hotel PINKOVI Nessebar</title>
</head>
<body>

    <div id="popup">
        <div id="left"><i class="fa-solid fa-chevron-left"></i></div>
        <img id="image" src="images/about_image.jpg">
        <div id="right"><i class="fa-solid fa-chevron-right"></i></div>
        <div class="close"><i id="close" class="fa-solid fa-xmark"></i></div>
    </div>

    <?php include('header_en.php'); ?>

    <div class="gallery">
        <div>
            <h1>GALLERY</h1>
            <hr />
        </div>
        <div class="images">
            <div><img src="gallery/pinkovi_01.jpg"></div>
            <div><img src="gallery/pinkovi_02.jpg"></div>
            <div><img src="gallery/pinkovi_03.jpg"></div>
            <div><img src="gallery/pinkovi_04.jpg"></div>
            <div><img src="gallery/pinkovi_05.jpg"></div>
            <div><img src="gallery/pinkovi_06.jpg"></div>
            <div><img src="gallery/pinkovi_07.jpg"></div>
            <div><img src="gallery/pinkovi_08.jpg"></div>
            <div><img src="gallery/pinkovi_09.jpg"></div>
            <div><img src="gallery/pinkovi_10.jpg"></div>
            <div><img src="gallery/pinkovi_11.jpg"></div>
            <div><img src="gallery/pinkovi_12.jpg"></div>
        </div>
    </div>
    

    <?php include('footer_en.php'); ?>
</body>
</html>
