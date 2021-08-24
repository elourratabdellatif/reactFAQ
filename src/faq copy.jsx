@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap");

/* Style the accordion section */
.accordion__section {
  display: flex;
  flex-direction: column;
}


/* Style the accordion content title */
.accordion__title {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
}

/* Style the accordion chevron icon */
.accordion__icon {
  margin-left: auto;
  transition: transform 0.6s ease;
}

/* Style to rotate icon when state is active */
.rotate {
  transform: rotate(90deg);
}

/* Style the accordion content panel. Note: hidden by default */
.accordion__content {
  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
}

/* Style the accordion content text */
.accordion__text {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
}

                    ///////////////////////////////

