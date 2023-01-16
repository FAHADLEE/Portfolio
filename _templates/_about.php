<section id="about" class="about">
    <div class="container" data-aos="fade-up">

        <div class="section-title">
            <h2>About</h2>
        </div>

        <div class="row">
            <div class="col-lg-4">
                <img src="assets/img/profile-img.jpg" class="img-fluid" alt="">
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content">
                <h3>UI/UX Designer &amp; Web Developer.</h3>
                <div class="row">
                    <div class="col-lg-5">
                        <ul>
                            <li><i class="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Abdul Fahad.K</span>
                            </li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>27 July 2000</span>
                            </li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <a
                                    href="mailto: www.exaple.com">www.example.com</a></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 7550256616</span>
                            </li>
                            <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Inda, Chennai</span>
                            </li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span id="result"></span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BCA Bacholer Of
                                    Computer Application</span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <a
                                    href="mailto:abdulfahad2000727@gmail.com ">abdulfahad2000727@gmail.com</a></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <html>
            <script>
                function ageCalculator() {
                    var userinput = "2000-07-27";
                    var dob = new Date(userinput);
                    if (userinput == null || userinput == '') {
                        document.getElementById("message").innerHTML = "**Choose a date please!";
                        return false;
                    } else {

                        //calculate month difference from current date in time
                        var month_diff = Date.now() - dob.getTime();

                        //convert the calculated difference in date format
                        var age_dt = new Date(month_diff);

                        //extract year from date    
                        var year = age_dt.getUTCFullYear();

                        //now calculate the age of the user
                        var age = Math.abs(year - 1970);

                        //display the calculated age
                        return document.getElementById("result").innerHTML =
                            age;
                    }
                }
                ageCalculator()
            </script>
</section>