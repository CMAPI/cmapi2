# Common Map API version 2

This is an early draft of CMAPI v2 concepts to be used a starting point for definition of an inital CMAPI 2.0.0 release.  Everything contained in this document is subject to change without notice

## Overview 
Common Map API v2 is a follow-on solution to CMAPI 1.3.0 that expands the scope of what CMAPI can be used for and provides a more concise API that addresses a number of deficiencies found in previous versions.

CMAPI v2 will attempt to create a new set of geospatial primitive objects that are reusable and effective for rich interaction between the data provider and map over CMAPI.  CMAPI v2 departs from the reliance on text-document-formatted data such as KML and GeoJSON and provides rich interaction for only data provided via the primitive mechanism.

CMAPI v2 will allow documents such as KML and GeoJSON to be passed to a map, but only for display.  Any application desiring to have interaction such as click events, editing, or selection will need to use the geo primitive objects.  Passing large blobs of KML with no way to guarantee existence of ids, and no way to enforce unique ids has created a problematic situation for developers to create consistent behavior when interacting with data that is not uniquely addressable.

CMAPI v2 also aims to provide actual language implementations of these geospatial primitives that are auto-generated from the same JSON Schema that this documentation is generated from.  These code generated objects adhere to the design documented here, but are provided in target programming languages for development use.  There is also a Google Protocol Buffers binary serialization capability that allows these geo primitive objects to be translated from any supported language to a binary form and deserialized in a different programming language runtime.

The current supported languages are Java and JavaScript.  

## Build Instructions

1. Download and install Node JS 
2. Open a Command Line Interface (CLI) from CMAPI2 root directory
3. Type: node generate.js
4. Output of the Documentation, Java, and JavaScript outputs will be in the "dist" folder at the root of the CMAPI2 project.  the dist folder will be cleared and overwritten each time you run the build.
5. To compile the Java source code into a jar file run: node compile.js

-------------------------------------------
See the [CMAPI Github][1] space for source code 

Visit [cmapi.org][2] for more information about previous versions of CMAPI 

  [1]: https://github.com/cmapi/cmapi2
  [2]: http://cmapi.org
