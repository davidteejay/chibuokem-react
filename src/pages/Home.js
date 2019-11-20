import React, { Fragment, useEffect } from 'react';
import $ from 'jquery'
import Materialize from 'materialize-css'

import Wrapper1 from '../components/wrapper1'
import Wrapper2 from '../components/wrapper2'
import Wrapper3 from '../components/wrapper3'
import Wrapper4 from '../components/wrapper4'
import Wrapper5 from '../components/wrapper5'
import Menu from '../components/menu'

export default () => {
  useEffect(() => {
    $('.scrollspy').scrollSpy({
      scrollOffset: 100
    })

    $(window).scroll(function () {
      $(".slideanim").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideup");
        }
      });

      $(".slideanim3").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("appear");
        }
      });
    });

    let options = [
      {
        selector: '#socialMenu', offset: 300, callback: function (el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: "#social", offset: 300, callback: function (el) {
          Materialize.showStaggeredList($(el));
        }
      }
    ];

    Materialize.scrollFire(options);

    $('.modal').modal({
      opacity: 1,
      starting_top: '0%',
      ending_top: '0%',
      complete: function () {
        window.location.hash = "#!"
      }
    })

    let hash = window.location.hash
    if (hash === "#thanks") {
      $('.modal').modal()
      $('.modal').modal('open')
    }
  }, [])

  return (
    <Fragment>
      <Menu/>
      <Wrapper1 />
      <Wrapper2 />
      <Wrapper3 />
      {/* <Wrapper5 /> */}
      <Wrapper4 />
    </Fragment>
  )
}
