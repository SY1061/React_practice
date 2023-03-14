// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {Fragment} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage, {loader as eventsLoader} from "./pages/Event";
import NewEventPage from "./pages/NewEvent";
import EventDetailPage, {action as deleteEventAction, loader as eventDetailLoader} from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";
import {action as manipulateEventAction} from "./components/EventForm";
import {action as newsletterAction} from "./pages/Newsletter";
import NewsletterPage from "./pages/Newsletter";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'newsletter', element: <NewsletterPage />, action: newsletterAction},
        {
          path: 'events',
          element: <EventsRootLayout />,
          children: [
            { index: true, element: <EventsPage />, loader: eventsLoader
            },
            { path: 'new', element: <NewEventPage />, action: manipulateEventAction},
            {
              path: ':eventId',
              id: 'event-detail',
              loader: eventDetailLoader,
              children: [
                { index: true, element: <EventDetailPage />, action: deleteEventAction },
                { path: 'edit', element: <EditEventPage />, action: manipulateEventAction }
              ]
            }
          ]
        }
      ]
    }
  ])

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
