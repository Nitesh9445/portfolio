  const darkToggle = document.getElementById("darkToggle");
  const htmlTag    = document.documentElement;

  darkToggle.addEventListener("click", () => {
    htmlTag.classList.toggle("dark");
  });

  const form  = document.getElementById('contactForm');
      const toast = document.getElementById('successToast');

      form.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent actual form submit

        // show toast
        toast.classList.remove('hidden');

        // auto hide after 3sec
        setTimeout(() => {
          toast.classList.add('hidden');
        }, 3000);

        // optional: clear form fields
        form.reset();
      });



     