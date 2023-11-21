<!DOCTYPE html>
<html lang="en-de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hug.bm-it.ch</title>
    <link rel="icon" href="https://localhost/hug.bm-it.ch/media/icons/ProfilePictureICO.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="https://localhost/hug.bm-it.ch/style/style.css">
</head>
<body>

    <!-- HEADER SECTION -->
    <header class="header-box">
        <div class="left">

          <!-- NAVIGATION MENU -->
            <nav>
                <ul>
                    <li>
                        <button id="navButton" onclick="toggleNavbar()">
                            <div id="stripeBox">
                                <div class="stripes"></div>
                                <div class="stripes"></div>
                                <div class="stripes"></div>
                            </div>
                        </button>
                    </li>
                    <li>
                        <a class="navbar-item home" id="home" href="#home-section">home</a>
                    </li>
                    <li>
                        <a class="navbar-item aboutMe" id="aboutMe" href="#about-me-section">about me</a>
                    </li>
                    <li>
                        <a class="navbar-item mySkills" id="mySkills" href="#my-skills-section">my skills</a>
                    </li>
                    <li>
                        <a class="navbar-item contact" id="contact" href="#contact-section">contact</a>
                    </li>
                </ul>
            </nav>
            <!-- END NAVIGATION MENU -->

        </div>
        <div class="right">
            <div id="socials">

                <!-- GitLab Link -->
                <a class="gitlab-link" href="https://gitlab.com/">
                    <img src="https://localhost/hug.bm-it.ch/media/pngs/GitLabOrange.png" alt="GitLab PNG" class="gitlab-png">
                </a>
    
                <!-- GitHub Link -->
                <a class="github-link" href="https://github.com/bmit-hug/hug.bm-it.ch/tree/main">
                    <img src="https://localhost/hug.bm-it.ch/media/pngs/GitHubPNG.png" alt="GitHub PNG" class="github-png">
                </a>
            </div>   
        </div>
    </header>
    <!-- END HEADER SECTION -->

    <!-- MAIN CONTENT SECTION -->
    <main>

        <!-- HOME SECTION -->
        <section id="home-section">

            <div class="col-1">
                <div class="home-heading">
                    <p class="hello-msg">Hi there! My name is
                        <h1>Lorenzo Hug</h1>
                    </p>
                    <h2>first year application developer at ESPAS Zürich</h2>
                    <h3 class="h3">アプリケーション開発者</h3>
                </div>
                <div class="test">
                    <p class="lorem-ipsum">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien nibh, sodales ac mauris at, malesuada
                        hendrerit orci. Phasellus semper nisi purus, nec ullamcorper mi mollis ac. Pellentesque rhoncus egestas
                        enim et dignissim. Nam in tempor odio. Nullam vitae libero a dui mollis porttitor. Duis consequat, dui
                        id tristique semper, dolor neque consectetur justo, sed efficitur arcu enim non erat. Aliquam erat volutpat.
                        Etiam lacus augue, lacinia vitae dictum in, fermentum quis enim. Pellentesque eu orci massa. Praesent
                        viverra dui augue, ac faucibus est efficitur a. In in aliquam arcu. Nullam sit amet neque augue.
                        Aliquam mattis lorem quam, vitae luctus eros auctor eget.
                    </p>
                </div>
            </div>
            <div class="col-2">
                <div id="mandoBox" class="mando-box">
                    <img src="https://localhost/hug.bm-it.ch/media/gifs/mando.gif" class="mando img-fluid" alt="MandoGif">
                </div>
            </div>
        </section>
        <!-- END HOME SECTION -->

        <!-- ABOUT ME SECTION -->
        <section id="about-me-section">
            <div class="col-1">
                <div class="about-me-heading">
                    <p class="h4">about me</p>
                    <p class="h5">my story</p>
                    <p class="h6">私について</p>
                </div>
                <div class="test">
                    <p class="about-me-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien nibh, sodales
                        ac mauris at, malesuada hendrerit orci. Phasellus semper nisi purus, nec ullamcorper mi mollis ac.
                        Pellentesque rhoncus egestas enim et dignissim. Nam in tempor odio. Nullam vitae libero a dui mollis
                        porttitor. Duis consequat, dui id tristique semper, dolor neque consectetur justo, sed efficitur
                        arcu enim non erat. Aliquam erat volutpat. Etiam lacus augue, lacinia vitae dictum in, fermentum quis enim.
                        Pellentesque eu orci massa.
                        Praesent viverra dui augue, ac faucibus est efficitur a. In in aliquam arcu. Nullam sit amet neque augue.
                        Aliquam mattis lorem quam, vitae luctus eros auctor eget. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia curae; Cras sed aliquet nibh. Quisque turpis dolor, mattis nec tincidunt non,
                        auctor quis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut a leo
                        vitae tortor viverra tempus mollis vitae libero. Praesent viverra, nisl vitae tempus posuere, turpis ligula fringilla
                        nisi, vitae tincidunt dui ipsum sed enim. Nam aliquam a velit eget interdum. Donec posuere metus eu ante ullamcorper
                        commodo. Aliquam sed felis ex. Sed at lacus non nunc ultrices convallis.
                        Vestibulum quis vestibulum nibh. Duis a ex euismod, mattis nibh eget, luctus ex. Nullam non risus elit.
                        In nisi arcu, scelerisque eu tellus quis, volutpat convallis neque. Proin tincidunt augue dapibus pharetra
                        malesuada. Duis in erat at lacus suscipit vehicula. In a nisl non nisi volutpat pharetra in id mi. Aenean
                        sollicitudin mauris id sapien congue, id dapibus quam luctus. Curabitur volutpat mi ac fermentum volutpat.
                        Praesent ornare lorem vitae felis blandit condimentum. Donec sodales, purus eu vulputate aliquet, magna lectus
                        convallis velit, vitae feugiat velit sem a nisl. Fusce suscipit diam at elit porttitor placerat. Curabitur id vehicula mi.
                        Proin dui diam, lacinia tincidunt erat fringilla, facilisis fermentum nisl. Aliquam vitae dolor fringilla eros ultricies cursus.
                    </p>
                </div>
            </div>

            <div class="col-2">
                <div id="test-box">
                    <div id="row-1">
                        <div id="px1"></div>
                        <div id="px2"></div>
                        <div id="px3"></div>
                    </div>
                    <div id="row-2">
                        <div id="px4"></div>
                        <div id="px5"></div>
                        <div id="px6"></div>
                    </div>
                    <div id="row-3">
                        <div id="px7"></div>
                        <div id="px8"></div>
                        <div id="px9"></div>
                    </div>
                </div>
            </div>

            <div class="row-3">
                <p>PANDA</p>
            </div>
        </section>
        <!-- END ABOUT ME SECTION -->

        <!-- MY SKILLS SECTION -->
        <section id="my-skills-section">

            <div class="col-1">
                <div class="my-skills-heading">
                    <p class="h1">my skills</p>
                    <p class="h2">something</p>
                    <p class="h3">何か</p>
                </div>
            </div>
            
            <div class="col-2">
                <div id="progress-box">

                    <div class="language-box">
                        <p class="progress-text">Python</p>
                        <progress id="python" value="32" max="100">TEST</progress>   
                    </div>

                    <div class="language-box">
                        <p class="progress-text">Java</p>
                        <progress id="java" value="16" max="100"></progress>   
                    </div>
                    
                    <div class="language-box">
                        <p class="progress-text">HTML</p>
                        <progress id="html" value="26" max="100"></progress>   
                    </div>

                    <div class="language-box">
                        <p class="progress-text">CSS</p>
                        <progress id="css" value="24" max="100"></progress>   
                    </div>
                    
                    <div class="language-box">
                        <p class="progress-text">JavaScript</p>
                        <progress id="java-script" value="20" max="100"></progress>   
                    </div>

                </div>
                <div class="ctfc-box">
                    <p class="ctfc-heading">certificates</p>
                    <div id="ctfcs">
                        <a class="cert" href="https://localhost/hug.bm-it.ch/media/jpgs/certificates/python.png">
                            <img id="img-ctfc" src="https://localhost/hug.bm-it.ch/media/jpgs/certificates/python.png">
                        </a>
                        <a class="cert" href="https://localhost/hug.bm-it.ch/media/jpgs/certificates/html.png">
                            <img id="img-ctfc" src="https://localhost/hug.bm-it.ch/media/jpgs/certificates/html.png">
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- END MY SKILLS SECTION -->

        <section id="contact-section">
            <div class="col-1">

                <!-- MAIL -->
                <div id="mail-box">
                    <h1>contact</h1>
                    <form action="https://localhost/hug.bm-it.ch/scripts/php/mail.php">
                        <label for="name">name:</label>
                        <input class="mail-req" type="text" name="name" required><br>

                        <label for="email">e-mail:</label>
                        <input class="mail-req" type="email" name="email" required><br>

                        <label for="message">message:</label>
                        <textarea name="message" required></textarea>

                        <input id="mail-submit" type="submit" value="send">
                    </form>
                    
                    <!-- PHP -->
                    <div id="mail">
                        <?php
                        if ($_SERVER["REQUEST_METHOD"] == "POST") {

                            // Formularvalidierung
                            $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : '';
                            $email = isset($_POST["email"]) ? filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) : '';
                            $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : '';

                            if ($name && $email && $message) {

                                // Empfänger-Email-Adresse
                                $receiver = "lorenzo.hug@icloud.com";

                                // Betreff der E-Mail
                                $subject = "Neue Kontaktanfrage von " . $name;

                                // Nachricht
                                $messageBody = "Name: " . $name . "\n";
                                $messageBody .= "E-Mail: " . $email . "\n";
                                $messageBody .= "Nachricht: " . $message;

                                // E-Mail versenden
                                $headers = "From: " . $email;

                                if (mail($receiver, $subject, $messageBody, $headers)) {
                                    echo "Thank you! Your contact request has been successfully sent.";
                                } else {
                                    echo "There was a problem sending the contact request. Please try again later.";
                                }
                            } else {
                                echo "Please fill out all required fields correctly.";
                            }
                        }
                        ?>
                    </div>
                    <!-- PHP END -->

                </div>
                <!-- MAIL END -->
                        
            </div>
        </section>

    </main>
    <!-- END MAIN CONTENT SECTION -->

    <!-- FOOTER SECTION -->
    <footer class="footer-box">
        <p class="left">大きなシュグラー \\<br>// Copyright &copy; 2023 by Lorenzo Hug</p><!--大きなシューラー-->
        <p class="right">。.. // v2.1.1<br>made with VSCode \\</p>
    </footer>
    <!-- END FOOTER SECTION -->

    <script src="https://localhost/hug.bm-it.ch/scripts/js/navbar.js"></script>
    <script src="https://localhost/hug.bm-it.ch/scripts/js/color.js"></script>
    <script src="https://localhost/hug.bm-it.ch/scripts/js/hover.js"></script>
</body>
</html>